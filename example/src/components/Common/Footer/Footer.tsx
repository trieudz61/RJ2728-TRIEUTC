import React from 'react'
interface IProps {

}

const Footer:React.FC<IProps> = (Props) => {
  return (
    <footer className="bg-light text-center text-lg-start" style={{marginTop: '15vh'}}>
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', fontSize: 10}}>
      <p style={{marginTop: '1%'}}>
        This web page is a part of a demonstration of fluid web design made by
        www.w3schools.com. Resize the browser window to see the content
        response to the resizing.
      </p>
    </div>
  </footer>
  )
}
export default Footer;