import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function PostIcons({tag, created_at, slug}) {
    const CustomTag = `${tag}`;
    const formattedDate = created_at.slice(0,10);
    const words = slug.split(' ');

    if (words.length > 1) {
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
    }
    const formattedSlug = words.join(" ");
    
    return (
        <div className="d-flex">
            <CustomTag className="me-3 mb-3 text-muted"><FontAwesomeIcon icon={solid('calendar-days')} /> {formattedDate}</CustomTag>
            <CustomTag className="me-3 mb-3 text-muted"><FontAwesomeIcon icon={solid('folder')} /> {formattedSlug}</CustomTag>
            <CustomTag className="me-3 mb-3 text-muted"><FontAwesomeIcon icon={solid('comments')} /> 0 Comments</CustomTag>
        </div>
    );
}

export default PostIcons;
