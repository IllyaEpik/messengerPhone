import { TouchableOpacity, Text } from "react-native";
import { createPostModalStyles } from "../styles/createPostModal.styles";

interface IProps {
    isSelected: boolean
    onPress: (tag:string) => void
    tag:string
}

export function Tag(props: IProps) {
    const {isSelected, tag, onPress } = props
    return (
        <TouchableOpacity
            style={[
                createPostModalStyles.tag,
                isSelected
                    ? createPostModalStyles.tagSelected
                    : null,
            ]}
            onPress={() => onPress(tag)}
        >
            <Text
                style={[
                    createPostModalStyles.tagText,
                    isSelected
                        ? createPostModalStyles.tagTextSelected
                        : null,
                ]}
            >
                #{tag}
            </Text>
        </TouchableOpacity>
    )
}