/* ============================================================
   SIGHTX — TELEMETRY ENGINE + PARTICLE BACKGROUND
   ============================================================ */

// ─── Live Clock ───
function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('live-clock').textContent = `${h}:${m}:${s}`;
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('live-date').textContent = now.toLocaleDateString('en-US', options).toUpperCase();
}
setInterval(updateClock, 1000);
updateClock();

// ─── SVG Ring Gauge Helper ───
const RING_CIRCUMFERENCE = 2 * Math.PI * 34; // radius = 34
function setRing(elementId, percent) {
    const offset = RING_CIRCUMFERENCE - (percent / 100) * RING_CIRCUMFERENCE;
    document.getElementById(elementId).style.strokeDashoffset = offset;
}

// ─── Telemetry Fetcher ───
function fetchTelemetry() {
    fetch('/api/telemetry')
        .then(r => r.json())
        .then(data => {
            // CPU Ring
            setRing('cpu-ring', data.cpu);
            document.getElementById('cpu-value').textContent = `${Math.round(data.cpu)}%`;

            // RAM Ring
            setRing('ram-ring', data.ram);
            document.getElementById('ram-value').textContent = `${Math.round(data.ram)}%`;

            // FPS
            document.getElementById('fps-value').textContent = data.fps;

            // Threat Meter
            const threatPct = (data.threat_level * 100).toFixed(1);
            document.getElementById('threat-fill').style.width = `${threatPct}%`;
            document.getElementById('threat-percent').textContent = `${threatPct}%`;

            // Alert Banner
            const banner = document.getElementById('alert-banner');
            if (data.alert_active) {
                banner.classList.remove('hidden');
                document.getElementById('threat-name').textContent = data.detected_threat.toUpperCase();
            } else {
                banner.classList.add('hidden');
            }

            // Incident Logs (rich card layout)
            const container = document.getElementById('logs-container');
            if (data.logs && data.logs.length > 0) {
                container.innerHTML = '';
                data.logs.forEach(log => {
                    const entry = document.createElement('div');
                    entry.className = 'log-entry';
                    entry.innerHTML = `
                        <div class="log-entry-header">
                            <span class="log-type">${log.type.toUpperCase()}</span>
                            <span class="log-conf">${log.conf}</span>
                        </div>
                        <span class="log-time">${log.time}</span>
                    `;
                    container.appendChild(entry);
                });
            }
        })
        .catch(err => console.warn('Telemetry unavailable:', err));
}

setInterval(fetchTelemetry, 800);
fetchTelemetry();

// ============================================================
// PARTICLE BACKGROUND ENGINE
// ============================================================
(function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 80;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 1.5 + 0.5;
            this.alpha = Math.random() * 0.3 + 0.05;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 204, ${this.alpha})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function drawLines() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 255, 204, ${0.04 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        drawLines();
        requestAnimationFrame(animate);
    }
    animate();
})();
