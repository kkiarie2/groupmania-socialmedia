import '../Styles/css/Post.css'
import React, {useState} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { AiFillLike, AiOutlineComment, AiOutlineLogout } from 'react-icons/ai';
import {format} from 'timeago.js'
import {imageRoute, deletePost, checkSession} from '../api.js'


const Image = ({imageUrl, className}) => {
    return( <img className={className} src={`${imageRoute}/${imageUrl}`}/>)
}

const Post = ({story, typeOfStory, authorinfo, postId, isAuthor, timestamp}) => {
  const [like, setLike] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [color, setColor] = useState()
  const history = useHistory()

  //console.log(authorinfo)
  //console.log(timestamp)
const user = (userId) => {
    
}

  const handleLike =() =>{
      setLike(isLiked ? like-1 : like+1 ) 
      setIsLiked(!isLiked)
      
  }
  const styles = {
    color:  isLiked ? "#1D9BF0" : "black"
  }

  const paragraph= (text) =>{
      return(<p className='post--paragraph'>{text}</p>       )
  }

  const handleDelete = async ()=> {
    const deleted = await deletePost(checkSession(), postId)
   // history.push("/home");
   history.go(0)
  }

//console.log(story)

 
    return (
               <> 
                  
             <div className='post--div'>
                    <div className='publisher-container'>
                            <div className='publisher--div'>
                                {<Image className='publisher--image' imageUrl={`${authorinfo.image}`}/>}
                            </div>
                            <div className='username--container'>
                                <div className='username--div'><span className='username--span'><h4 className='name--h4'>{authorinfo.lastname}</h4></span> </div>
                                <div className='time--div'><span className='timestamp'>{format(timestamp)}</span> </div>
                            </div>
                    </div>
                    <div className='post-text-div'>
                        <Link to={`/post/${postId}`} className='post--link'>
                            <div className='post-size'>
                                  {/*(story).length <= 25 ? story : `${(story).slice(0, 25)}...`*/}
                                
                                {typeOfStory === 'post' ? paragraph(story[0]) : null }
                                {typeOfStory === 'image' ? <Image imageUrl={story[0]}/> : null }
                                {typeOfStory === 'article' ? <React.Fragment ><div className='story-div'>{paragraph(story[0])} </div><div className='story-image-div'>{<Image imageUrl={story[1]}/>}</div></React.Fragment> : null }
                    
                                        
                            
                            </div>
                        </Link>      
                
                            <div className='icons--div'>
                                
                                    <div style={styles} className='likes--div icons' onClick={handleLike}>
                                        <AiFillLike className='icons--likes '/>
                                    
                                        <div className='icons--usersliked numbers'>{like}</div>
                                    </div> 
                                    
                                    <div className='comments--div icons '>
                                        <AiOutlineComment className='icons--comments '/>
                                        <div className='icons--comments--count numbers'>50</div>
                                    </div>
                                    { isAuthor && (<>
                                        <div className='edit--div '>
                                        <Link to="/editpost">
                                            <button className='button--edit edit--post' type='button'
                                            >Edit</button> 
                                        </Link>    
                                    </div>
                                    
                                    <div className='delete--div '>
                                        <button className='button-delete delete--post' onClick={()=> handleDelete()}>Delete</button>

                                
                                    </div>
                                    </>)
                                        
                                    }
                                    
                                    
                                    
                                
                            </div>
                    
                    </div>
                
                
                    
                </div>

               

                </>
  )
}




export default Post







 