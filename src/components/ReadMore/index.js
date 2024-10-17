import {useState} from 'react'
import {
  BgContainer,
  MainHeading,
  Description,
  Image,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isActive, setIsActive] = useState(true)

  const onClickRead = () => {
    setIsActive(prevState => !prevState)
  }

  const button = isActive ? 'Read More' : 'Read Less'

  const reactDescription = isActive
    ? `${reactHooksDescription.slice(0, 170)}`
    : reactHooksDescription

  return (
    <BgContainer>
      <MainHeading>React Hooks</MainHeading>
      <Description>Hooks are a new addition to React</Description>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{reactDescription}</Description>
      <Button type="button" onClick={onClickRead}>
        {button}
      </Button>
    </BgContainer>
  )
}

export default ReadMore
