import style from './index.module.css'


const ContainerFull = (props) => {
    const {children} = props
  return (
    <div className={style['container']}>
        {children}        
    </div>
  )
}
export default ContainerFull