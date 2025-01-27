import PanelContainer from '../PanelContainer/PanelContainer';
import { Input, TextArea } from '../Inputs/Inputs'
import './AddComment.css'; //=> Code 14

const AddComment = () => {
    return (
        <PanelContainer>
            <div className="h5">
                دیدگاه شما
            </div>
            <form className="comment-form_14">
                <Input
                    type="text"
                    label="نام"
                    helpText=""
                    error={''}
                />
                <Input
                    type="email"
                    label="ایمیل"
                    helpText=""
                    error={''}
                />
                <TextArea
                    label="متن دیدگاه"
                    helpText=""
                    error={''}
                />
            </form>
        </PanelContainer>
    )
}
export default AddComment