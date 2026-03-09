document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#73ffdc',     // cor das partículas
    lineColor: '#73ffdc',    // cor das linhas
    density: 12000,          // quantidade base
    maxParticles: 150,       // 👈 limite máximo de partículas
    particleRadius: 5,       // tamanho das bolinhas
    lineWidth: 0.8,          // espessura das linhas
    proximity: 120,          // distância para conectar partículas
    minSpeedX: 0.1,
    maxSpeedX: 0.4,
    minSpeedY: 0.1,
    maxSpeedY: 0.4,
    parallax: true,
    parallaxMultiplier: 5
  });
}, false);
