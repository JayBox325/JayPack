## Development checklist
### Content
- [ ] Confirm `<button>`, `<a>` and `<label>` elements have descriptive labels (avoiding "click here")
- [ ] Confirm longform body text is left-aligned 

### Global
- [ ] Add `lang` attribute on the `<html>` element
- [ ] Appropriate `<title>` tags per page
- [ ] Confirm that viewport zoom is not disabled
- [ ] Confirm appropriate landmark elements are used (`<header>`, `<footer>` etc)
- [ ] Remove all `autofocus` attributes
- [ ] Remove session timeouts (if applicable)
- [ ] Remove `title` attributes
- [ ] Confirm `<meta name="robots" content="noindex, nofollow">` doesn't exist
- [ ] Confirm print stylesheet is working

### Keyboard navigation
- [ ] Confirm tab order follows page structure
- [ ] Confirm all areas are keyboard-accessibile
- [ ] All focussable elements have clear focus states for keyboard users

### Media
- [ ] All `<img>` elements to have `alt` attribute (Empty for decorative images)
- [ ] Add `loading="lazy"` to all images below the 'fold'
- [ ] Add text alternatives (image caption) for complex images (charts, graphs & maps)
- [ ] Confirm images with text have appropriate `alt` descriptions
- [ ] Remove all `autoplay` attributes
- [ ] Confirm all media can be paused (even decorative videos)
- [ ] Ability to display captions
- [ ] Ability to add audio file transcripts

### Headings
- [ ] All headings have a heading tag
- [ ] One `H1` per view (note: not to be used for site-wide text like the site title)
- [ ] Confirm heading tag sequence (outside of CMS content)

### Lists
- [ ] Lists use `<ul>`, `<ol>` or `<dl>` elements

### Controls
- [ ] Links are `<a>` elements
- [ ] Buttons are `<button>` elements
- [ ] All external links include `rel="noopener norefferer"`
- [ ] External links are clearly indicated (icon or new window warning)
- [ ] Clickable elements are clearly indicated

### Forms
- [ ] Inputs have a linked `<label>` element
- [ ] Use `autocomplete` where appropriate
- [ ] Group all form errors in a list above form
- [ ] Indicate error fields with a warning (not just colour)

### Appearance
- [ ] Dark mode switch (where appropriate)
- [ ] Confirm content still works with page zoomed to 200%
- [ ] Confirm colour isn't the only method to convey information
- [ ] Animations to obey the `prefers-reduced-motion` media query

### Colour
- [ ] Confirm colour contrast for normal text passes AA
- [ ] Confirm colour contrast for large text passes AA
- [ ] Confirm colour contrast for input borders passes AA

### Mobile
- [ ] Confirm site works in landscape mobile view
- [ ] Remove any instances of horizontal scrolling
- [ ] Confirm interactive elements are bigger on mobile
- [ ] Confirm spacing between interactive elements on mobile

## Polish
- [ ] Favicon is [generated](https://realfavicongenerator.net/) and added
- [ ] 404 page is setup
- [ ] 500 page is setup

## Pre-launch optimisation
- [ ] [Validate HTML](https://validator.w3.org/)
- [ ] [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [ ] Test Twitter meta tags with the [Twitter Validator](https://cards-dev.twitter.com/validator)
- [ ] Test Facebook meta tags with the [Facebook Debugger](https://developers.facebook.com/tools/debug/)

## Post-launch optimisation
- [ ] [Webmaster Tools](https://search.google.com/search-console/about)
- [ ] Confirm Google Analytics is tracking Production **only**
- [ ] Confirm packaged project is deployed
- [ ] www redirects to non-www

Lots of this checklist has been generated from [The A11y Project](https://www.a11yproject.com/checklist) checklist