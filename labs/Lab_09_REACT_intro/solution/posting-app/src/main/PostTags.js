import React, {useState} from 'react';

const PostTags = ({tag, sort}) => {
    const [selectTag, setSelectTag] = useState(false);

    const onClickSelectTag = () => {
        if(!selectTag){
            setSelectTag(true);
            sort(tag);
        }
        else setSelectTag(false);
    }

    return (
        <div className="tags" 
            style={{display:'flex', flexDirection:'row'}}>
            <p style={{ color:selectTag?'red':'black' }} onClick={onClickSelectTag}>{tag}</p>
        </div>
    );
};

export default PostTags;