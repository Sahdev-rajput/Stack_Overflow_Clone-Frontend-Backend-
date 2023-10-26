import React from 'react'
import Leftsidebar from '../../Components/Leftsidebar/LeftSidebar'
import Taglist from './Taglist'
import "./Tags.css"
const Tags = () => {
    const tagsList=[{
     id:1,
     tagName:"Javascript",
     tagDesc:"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else."
    },{
        id:2,
        tagName:"Java",
        tagDesc:"Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today. "
       },{
        id:3,
        tagName:"C++",
        tagDesc:"C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs. C++ is portable and can be used to develop applications that can be adapted to multiple platforms."
       },{
        id:4,
        tagName:"C#",
        tagDesc:"C# is an object-oriented, component-oriented programming language. C# provides language constructs to directly support these concepts, making C# a natural language in which to create and use software components."
       },{
        id:5,
        tagName:"C",
        tagDesc:"C  is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972. It is a very popular language, despite being old. C is strongly associated with UNIX, as it was developed to write the UNIX operating system."
       },{
        id:6,
        tagName:"Solidity",
        tagDesc:"Solidity is an object-oriented programming language created specifically by the Ethereum Network team for constructing and designing smart contracts on Blockchain platforms. It's used to create smart contracts "
       },{
        id:7,
        tagName:"Node.js",
        tagDesc:"Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021."
       },{
        id:8,
        tagName:"React.js",
        tagDesc:"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies"
       },{
        id:9,
        tagName:"EJS",
        tagDesc:"EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow."
       },{
        id:10,
        tagName:"Python",
        tagDesc:"Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language"
       }]
  return (
    <div className='home-container-tags-1'>
    <Leftsidebar/>
    <div className='home-container-tags-2'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A Tag is a keyword or label that categorizes your question with other, similar questions.</p>
        <p className='tags-p'>Using the right tags makes it easier for others to find ans answer your questions.</p>
        <div className='tags-list-container'>
            {
                tagsList.map((tag)=>(
                    <Taglist tag={tag} key={tagsList.id}></Taglist>
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Tags