const ShortenLinks = ({smallLink, originalLink}) => {
  
  const copyToClipboard = (e) => {
    const button = document.querySelector('.link-item button')
    button.textContent = 'Copied';
    button.style.backgroundColor = 'hsl(257, 27%, 26%)';

    navigator.clipboard.writeText(smallLink)
  }

  return (
    <div className='link-item'>
      <p>{originalLink}</p>
      <div>
        <p>{smallLink}</p>
        <button onClick={() => copyToClipboard()}>Copy</button>
      </div>
    </div>
  );
}
 
export default ShortenLinks;