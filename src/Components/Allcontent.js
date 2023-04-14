import React from 'react'
import Content from "./Content";
import { graphql, useStaticQuery } from 'gatsby';
const query = graphql`
  {
    allContentfulGatsbyProject(sort: {fields: title, order: ASC}) {
      nodes {
        title
        description
        bannerImage {
          gatsbyImageData(layout: CONSTRAINED)
        }
        longDescription {
            internal {
              content
            }
          }
        dropdownImage {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`

const Allcontent = () => {
    const data = useStaticQuery(query);
    const content = data.allContentfulGatsbyProject.nodes
  return (
    <section>
      
      <Content content = {content}/>
    </section>
  )
}

export default Allcontent
