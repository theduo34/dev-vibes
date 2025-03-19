import {Socials} from "../ui/socials";


const FooterPage = () => {
  const date = new Date();
  return(
    <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 pb-2 '>
      <div>{`© Emmanuel Somuah ${date.getUTCFullYear()}`}</div>
      <div>
        <Socials/>
      </div>
    </div>
  )
}
export default FooterPage