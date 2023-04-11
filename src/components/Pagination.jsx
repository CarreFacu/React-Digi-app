import Button from '@mui/material/Button';
import '../css/pagination.css'

function Pagination({prev, next, onPrevious, onNext}) {
    console.log(prev)
    const handlePrevious = () =>{
        onPrevious();
    }
    const handleNext = () =>{
        onNext();
    }
    return (
        <div className="pagination">
            {prev?.previousPage ?
                <div className="button-prev">
                <Button  variant="contained"
                         onClick={() => {
                             handlePrevious();
                         }}>
                    Prev
                </Button>
            </div> : null  }
            {next?.nextPage ?
                <div className="button-next">
                <Button  variant="contained"
                         onClick={() => {
                             handleNext();
                         }}>
                    Next
                </Button>
            </div> : null}
        </div>

    );
}

export default Pagination;