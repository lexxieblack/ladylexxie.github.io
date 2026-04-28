document.addEventListener('DOMContentLoaded', () => {
  const body = document.body
  const toggleButton = document.getElementById('theme-toggle')
  const toggleIcon = toggleButton ? toggleButton.querySelector('i') : null
  const tableBody = document.querySelector('tbody')
  const STORAGE_KEY = 'dark-mode-preference'

  // --- Theme Logic ---
  const updateIcon = (isDark) => {
    if (toggleIcon) {
      toggleIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
    }
  }

  const applyTheme = (isDark) => {
    if (isDark) {
      body.classList.add('dark-mode')
      localStorage.setItem(STORAGE_KEY, 'dark')
    } else {
      body.classList.remove('dark-mode')
      localStorage.setItem(STORAGE_KEY, 'light')
    }
    updateIcon(isDark)
  }

  const storedPreference = localStorage.getItem(STORAGE_KEY)
  let isDark = storedPreference ? (storedPreference === 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(isDark)

  if (toggleButton) {
    toggleButton.addEventListener('click', () => applyTheme(!body.classList.contains('dark-mode')))
  }

  // --- Data Loading Logic ---
  async function loadTableData() {
    try {
      const response = await fetch('versions.json')
      if (!response.ok) throw new Error('Failed to load version data')
      const data = await response.json()
      renderTable(data)
    } catch (error) {
      console.error('Error:', error)
      if (tableBody) tableBody.innerHTML = '<tr><td colspan="4">Error loading data.</td></tr>'
    }
  }

  function renderTable(versions) {
    if (!tableBody) return
    tableBody.innerHTML = '' // Clear hardcoded content

    versions.forEach(item => {
      const row = document.createElement('tr')

      // Helper to create link or dash
      const createCellContent = (loaderData) => {
        if (!loaderData || !loaderData.version) return '-'
        return `<a href="${loaderData.url}" target="_blank">${loaderData.version}</a>`
      }

      row.innerHTML = `
        <td>${item.minecraft}</td>
        <td>${createCellContent(item.neoforge)}</td>
        <td>${createCellContent(item.fabric)}</td>
        <td>${createCellContent(item.forge)}</td>
      `
      tableBody.appendChild(row)
    })
  }

  loadTableData()
})
