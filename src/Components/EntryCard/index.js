import VolcanTurrialba from '../../assets/Images/VolcanTurrialba.jpg';

const styles = {
    imageLogo: {
        width: "300px",
            height: "200px",
            padding: ".75rem",
        }
    }
const EntryCard = props => {
    const {entryData} = props
    const {entryTitle, content, picture} = entryData
    return (
         <div className="BlogEntry">
         <img src={picture} style={styles.imageLogo} alt=""></img>
            <h2>{entryTitle} </h2>
              <p>{content} </p>
              <button>Show more</button>
            
         </div>
        
      )
} 

export default EntryCard