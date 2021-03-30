import BouncingBalls from './BouncingBalls'

const Shorten = ({setInputUrl, setShowError, showError, isLoading, setIsLoading}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputField = document.querySelector('input');
    const form = document.querySelector('form')

    setIsLoading(true)

    if (inputField.value === ''){
      setShowError(true);
      setIsLoading(false);
    }
    else {
      setInputUrl(inputField.value);
      setShowError(false);
      setIsLoading(true);
    }

    form.reset();
  }

  return (
    <div className="shorten">
      <form onSubmit={handleSubmit}>
        {!isLoading && <input style={showError ? {border: '3px solid red'} : {border: 'none'}} type="text" placeholder='Shorten a link here...'/>}
        {!isLoading && <button className='shorten-btn'>Shorten it!</button>}
        {isLoading && <BouncingBalls />}
      </form>
      {showError && <p className='err-show'>Please enter a valid link</p>}
    </div>
  );
}
 
export default Shorten;
