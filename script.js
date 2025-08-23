/*
  Script para animações e interatividade do site Tutti Data.
  Responsável por revelar elementos conforme eles entram na viewport
  e alterar o estilo da navegação ao rolar a página.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Animação de aparição com IntersectionObserver
  const observerOptions = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  // Alterar cor de fundo da navbar ao rolar
  const navbar = document.getElementById('navbar');
  const changeNavOnScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', changeNavOnScroll);
  // Chamar no carregamento para definir o estado inicial
  changeNavOnScroll();
});