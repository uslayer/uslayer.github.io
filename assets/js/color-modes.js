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
      if (storedTheme) {
        return storedTheme
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = theme => {
      const resolved = (theme === 'auto' || theme === 'dark' || theme === 'light') ? theme : 'light'
      if (resolved === 'auto') {
        document.documentElement.setAttribute('data-bs-theme',
          window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      } else {
        document.documentElement.setAttribute('data-bs-theme', resolved)
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = (theme, focus = false) => {
      try {
        const themeSwitcher = document.querySelector('#themeToggle')
        if (!themeSwitcher) return
  
        const activeThemeIcon = document.querySelector('.theme-icon-active use')
        const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
        if (!btnToActive) return
  
        const useEl = btnToActive.querySelector('svg use')
        const svgOfActiveBtn = useEl ? useEl.getAttribute('href') : null
  
        document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
          element.classList.remove('active')
          element.setAttribute('aria-pressed', 'false')
        })
  
        btnToActive.classList.add('active')
        btnToActive.setAttribute('aria-pressed', 'true')
        if (activeThemeIcon && svgOfActiveBtn) {
          activeThemeIcon.setAttribute('href', svgOfActiveBtn)
        }
        themeSwitcher.setAttribute('aria-label', `Theme: ${theme}`)
  
        if (focus) {
          themeSwitcher.focus()
        }
      } catch (e) {
        // fail silently — theme switching must not break page functionality
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
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setStoredTheme(theme)
            setTheme(theme)
            showActiveTheme(theme, true)
          })
        })
    })
  })()