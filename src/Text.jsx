
import Button from '@mui/material/Button';
function Text() {
  return (
    <>
      <div className="text-container">
         <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>

         <p>Enter Your Text Here:</p>

          <div className="text-area">
          <textarea name="" id="" rows={7}></textarea>
          </div>

          <div className="button-group">
          <Button variant="contained">Convert UpperCase</Button>
          <Button variant="contained">Convert LowerCase</Button>
          <Button variant="contained" style={{backgroundColor:"#E37781"}}>Clear Text</Button>
          <Button variant="contained" style={{backgroundColor:"#64AC8B"}}>Copy to Clipboard</Button>
          <Button variant="contained">Remove Extra Spaces</Button>
          </div>
      </div>
    </>
  )
}

export default Text