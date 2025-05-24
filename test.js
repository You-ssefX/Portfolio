// Basic JS component tests for portfolio

function assert(condition, msg) {
  if (!condition) throw new Error(msg);
}

function testLanguageSwitcher() {
  // Test that changing language changes page contents
  const enBtn = document.querySelector('.lang-btn[data-lang="en"]');
  const frBtn = document.querySelector('.lang-btn[data-lang="fr"]');
  enBtn.click();
  setTimeout(() => {
    assert(document.documentElement.lang === "en", "Language should be English after EN click");
    assert(document.querySelector('h2[data-i18n="about.title"]').textContent.includes("About"), "EN translation appears");
    frBtn.click();
    setTimeout(() => {
      assert(document.documentElement.lang === "fr", "Language should be French after FR click");
      assert(document.querySelector('h2[data-i18n="about.title"]').textContent.includes("À propos") ||
        document.querySelector('h2[data-i18n="about.title"]').textContent.includes("propos"), "FR translation appears");
    }, 100);
  }, 100);
}

function testSectionTransitions() {
  // All sections except #hero are .section-hidden at load, then .section-visible after scroll
  const toTest = Array.from(document.querySelectorAll('section, footer')).filter(section => {
    return !section.id || section.id !== 'hero';
  });
  toTest.forEach(section => {
    assert(section.classList.contains('section-hidden'), "Section is hidden at start");
  });
  window.scrollTo(0, document.body.scrollHeight);
  setTimeout(() => {
    toTest.forEach(section => {
      assert(section.classList.contains('section-visible'), "Section is visible after scroll");
    });
  }, 800);
}

function testProjectsRender() {
  const projectsGrid = document.getElementById('projectsGrid');
  const cards = projectsGrid.querySelectorAll('.project-card');
  assert(cards.length >= 2, "At least 2 projects rendered");
  assert(cards[0].querySelector('img'), "Project card has image");
  assert(cards[0].querySelector('a'), "Project card has link");
}

function testNavAccessibility() {
  const navLinks = document.querySelectorAll('nav a[data-nav]');
  navLinks.forEach(link => {
    assert(link.getAttribute("tabindex") === "0", "Nav link is keyboard accessible");
  });
}

function runAllTests() {
  try {
    testLanguageSwitcher();
    testSectionTransitions();
    testProjectsRender();
    testNavAccessibility();
    // More tests can be added!
    console.log("All tests PASSED ");
  } catch (e) {
    console.error("Test failed:", e);
    document.body.insertAdjacentHTML('afterbegin', '<div style="color:red;font-size:1.3em;">Test failed: ' + e.message + '</div>');
  }
}

window.addEventListener('DOMContentLoaded', runAllTests);