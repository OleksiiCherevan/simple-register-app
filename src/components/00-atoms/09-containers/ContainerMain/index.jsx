import style from './index.module.css'


const ContainerMain = (props) => {
    const {children} = props
  return (
    <div className={style['container']}>
        {children}        
    </div>
  )
}
export default ContainerMain