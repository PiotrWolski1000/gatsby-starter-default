import React from 'react'
import HeroComponent from '../components/HeroComponent';
import WhatWeOfferComponent from '../components/WhatWeOfferComponent';

const indexPage = ({data}) => {
    return (

        <div>
          <HeroComponent 
            menuData={data.allContentfulMenu} 
            logo={data.allContentfulLogo}
            mainText={data.allContentfulMainText}
            heroCardsData={data.allContentfulHeroSectionCards}
            button={data.allContentfulHeroSectionButton}
            searchButton={data.allContentfulSearchButtonMenu}
          />

          <WhatWeOfferComponent
            cards={data.allContentfulWhatWeOfferCards}
            mainInfo={data.allContentfulWhatWeOfferSection}
          />

        </div>
    )
}

export default indexPage


export const query = graphql`
query section1{
  allContentfulMenu {
    edges {
      node {
        text
      }
    }
  }
  allContentfulLogo{
	  edges {
	    node {
	  		img {
        	file{
            url
            details{
              image{
                width
                height
              }
            }
          }  
	  		}    
	    }
	  }
  }
  allContentfulMainText{
	  edges {
	    node {
    	  text  
        underlineImage{
            file{
              url
              details{
                image{
                  width
                  height
                }
              }
            }
          }
      }
    }
  }
  allContentfulHeroSectionCards{
	  edges {
	    node {
	  	    title
        	description
	  	   	underlineImage{
            file{
              url
              details{
                image{
                  width
                  height
                }
              }
            } 
          }
        readMoreImage{
          file{
            url
            details{
              image{
                width
                height
              }
            }
          }
        }
      }
    }
  }
  allContentfulWhatWeOfferCards{
    edges{
      node{
        title
        description
        img{
          file{
            url
            details{
              image{
                width
                height
              }
            }
          }
        }
      }
    }
  }
  allContentfulWhatWeOfferSection{
    edges{
      node{
        title
        subtitle
        underlineImageWhatWeOffer{
          file{
            url
            details{
              image{
                width
                height
              }
            }
          }
        }
      }
    }
  }
  allContentfulHeroSectionButton{
    edges{
      node{
        text
      }
    }
  }
  allContentfulSearchButtonMenu{
    edges{
      node{
        button{
          file{
            url
            details{
              image{
                width
                height
              }
            }
          }
        }
      }
    }
  }
}
`