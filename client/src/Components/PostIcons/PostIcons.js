import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function PostIcons({tag}) {
    const CustomTag = `${tag}`;
    return (
        <div className="d-flex">
            <CustomTag className="me-3 mb-3 text-muted"><FontAwesomeIcon icon={solid('calendar-days')} /> 01-Jan-2045</CustomTag>
            <CustomTag className="me-3 mb-3 text-muted"><FontAwesomeIcon icon={solid('folder')} /> Web Design</CustomTag>
            <CustomTag className="me-3 mb-3 text-muted"><FontAwesomeIcon icon={solid('comments')} /> 15 Comments</CustomTag>
        </div>
    );
}

export default PostIcons;
