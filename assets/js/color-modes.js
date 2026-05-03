/*!
 * Color mode toggler for Bootstrap
 * https://getbootstrap.com/
 */

(() => {
    'use strict'
  
    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) return storedTheme
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = theme => {
      if (theme === 'auto') {
        document.documentElement.setAttribute('data-bs-theme',
          window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme || 'light')
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = (theme) => {
      try {
        // Update desktop toggle icon
        const activeIcon = document.querySelector('.theme-icon-active use')
        const srcBtn = document.querySelector(`#themePanel [data-bs-theme-value="${theme}"]`)
        if (activeIcon && srcBtn) {
          const srcUse = srcBtn.querySelector('svg use')
          if (srcUse) activeIcon.setAttribute('href', srcUse.getAttribute('href'))
        }
        // Mark active in desktop panel
        document.querySelectorAll('.theme-panel-item').forEach(el => {
          const isActive = el.getAttribute('data-bs-theme-value') === theme
          el.classList.toggle('active', isActive)
          el.setAttribute('aria-pressed', isActive ? 'true' : 'false')
        })
        // Mark active in mobile buttons
        document.querySelectorAll('.mobile-theme-btn').forEach(el => {
          el.classList.toggle('active', el.getAttribute('data-bs-theme-value') === theme)
        })
      } catch (e) {
        // fail silently
      }
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme()
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())
  
      // Desktop panel toggle (open/close)
      const toggleBtn = document.getElementById('themeToggle')
      const panel = document.getElementById('themePanel')
      if (toggleBtn && panel) {
        toggleBtn.addEventListener('click', (e) => {
          e.stopPropagation()
          const open = panel.classList.toggle('open')
          toggleBtn.setAttribute('aria-expanded', open)
        })
        // Close on outside click
        document.addEventListener('click', () => {
          panel.classList.remove('open')
          toggleBtn.setAttribute('aria-expanded', 'false')
        })
        panel.addEventListener('click', e => e.stopPropagation())
      }
  
      // All theme buttons (desktop panel + mobile)
      document.querySelectorAll('[data-bs-theme-value]').forEach(btn => {
        btn.addEventListener('click', () => {
          const theme = btn.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme)
          // Close desktop panel after pick
          if (panel) {
            panel.classList.remove('open')
            if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false')
          }
        })
      })
    })
  })()