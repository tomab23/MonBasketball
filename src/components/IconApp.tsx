import panier from "/panier.png"

type Props = {
    classname: string
}

const IconApp = ({ classname }: Props) => {

  return <img src={panier} alt="Panier de basket icône par juicy_fish" title="icône par juicy_fish" className={classname} />
  
}

export default IconApp
