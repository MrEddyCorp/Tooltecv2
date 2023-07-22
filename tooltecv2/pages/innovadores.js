import Layout from '../components/layout'



export const getStaticProps = async () => {
    const res = await fetch(process.env.ULR_INNOVADORES)
    const repo = await res.json()
    let x = ""
    var data = []
    for (x in repo.expertos){
        console.log(x)
        data.push(repo.expertos[x])
    }

    return { props: { data } }
  }

  /*export default function Page({ repo }) {
    return repo.expertos
  }*/
export default function Innovadores(props){
   // console.log(props)
    return(
    <div>
        Innovadores
        <ul>
        {props.data.map((experto) => (
          <li>{experto.nombre}</li>
        ))}
      </ul>
    </div>)
}