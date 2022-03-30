import style from './index.module.css'

import BLANK_USER from 'assets/images/photo-cover.svg'

const ImageUser = (props) => {
    const {image = BLANK_USER, name='User photo'} = props

  return (
    <img className={style['photo']} src={image} alt={name}/>
  )
}
export default ImageUser