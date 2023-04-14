import React from 'react'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'

const Content = ({content=[]}) => {
  return (
    <div>
      {
        content.map((content)=>{
            const {title, description, bannerImage} = content;
            const pathToImage = getImage(bannerImage)
            return <><p>{content.title}</p>
            <p>"{description}"</p>
            <GatsbyImage 
                bannerImage={pathToImage} alt={title}
              
            />
            </>
    
        })
      }
    </div>
  )
}

export default Content
