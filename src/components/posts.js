
import Post from "./post.js"

export default function Posts (props){
    const post = [
        {save:"bookmark-outline",likenum:101523,like:"heart-outline" ,icon:"assets/meowed 1.svg",image:"assets/gato-telefone 1.svg",name:"meowed"},
        {save:"bookmark-outline",likenum:101523,like:"heart-outline" ,icon:"assets/barked 1.svg",image:"assets/dog 1.svg",name:"barked"},
        {save:"bookmark-outline",likenum:101523,like:"heart-outline" ,icon:"assets/meowed 1.svg",image:"assets/gato-telefone 1.svg",name:"meowed"}
      ]

    return(
        <div className="posts">
        {post.map((props)=>
          <Post save = {props.save} likenum = {props.likenum} like = {props.like} icon={props.icon} image={props.image} name = {props.name}/>
          )}
          </div>
    )
}