# Music Madness

A multiple page app, using react-router.

# Objectives

- Create a SPA, with a few pages
- Learn to work with React Router Dom

# Includes

- [REACT](https://reactjs.org/docs/getting-started.html)
- [REACT ROUTER DOM](https://www.npmjs.com/package/react-router-dom)

# Featured Code

## Routing from HomePage via Link

```JSX
const HomePage = () => {
  return (
    <HomeSection>
      <header>Welcome to Music Madness!</header>
      <p>My Top 3 Favorite Bands:</p>
      <ul>
        <li>
          <Link to="/tool">TOOL</Link>
        </li>
        <li>
          <Link to="/btbam">Between the Buried and Me</Link>
        </li>
        <li>
          <Link to="/periphery">Periphery</Link>
        </li>
      </ul>
      <p>Genre: Progressive Metal</p>
    </HomeSection>
  )
}
```

# Live Site

- [LIVE SITE](https://music-madness-sam.netlify.app/)
