import Button from './Button';

const ButtonGroup = () => {
    return (
        <div className="button-group">
            <Button primary>See some work</Button>
            <Button icon={<img src="download_purple.svg" alt="Download" className="button-icon" />}>Grab my CV</Button>
        </div>
    );
};

export default ButtonGroup;