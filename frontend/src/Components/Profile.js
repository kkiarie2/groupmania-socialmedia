import '../Styles/css/Profile.css'


export default function Profile(){
    return(
        < div className='profile--container'>
            <div className="profile--imgdiv">
                        
            <img className="profile--image" src= 'picture.png'/>
        

            </div>
            <div className="profile--info">
                <p className="profile--name">Bitcoin buddy</p>
                <p className="profile--dept">IT Depart</p>
            
            
            </div>
            <div className="edit--div">


                    <button className="btn-edit-pfl button--edit btn">Edit Profile</button>
    
                <button className="btn--delete--pfl delete--button btn">Delete Profile</button>

             </div>
            <main className="profile--posts"></main>
        
        
        </div>

    )
}
