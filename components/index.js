import { PureComponent } from 'react'
import withFullHeight from 'full-height-hoc'
import styled, { css } from 'react-emotion'

import Card from '../components/card'
import Navbar from '../components/navbar'

class Index extends PureComponent {
  render () {
    const {
      time,
      language,
      repos = [],
      timeOptions = {},
      languageOptions = {}
    } = this.props

    return (
      <Hero>
        <Navbar
          time={time}
          language={language}
          timeOptions={timeOptions}
          languageOptions={languageOptions}
        />

        <Row>
          {
            repos.map((repo, index) => (
              <Card
                key={index}
                repo={repo}
                index={index}
              />
            ))
          }
        </Row>
      </Hero>
    )
  }
}

export default withFullHeight(Index)

const Hero = styled.div`
  width: 100%;
  color: #333;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;

  @media(max-width: 767px) {
    flex-direction: column-reverse;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(300px - 8px), 1fr));
  grid-gap: 8px;
  padding-bottom: 50px;
  width: 100%;
  margin-top: 2rem;

  @media(max-width: 767px) {
    margin-top: 0;
  }
`
