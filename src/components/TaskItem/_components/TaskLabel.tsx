import React, {useEffect, memo} from 'react';
import { Text, View } from 'react-native';
import Animated, {Easing, 
useSharedValue, 
useAnimatedStyle, 
withTiming, 
interpolateColor} from 'react-native-reanimated';

interface Props {
    strike: boolean;
    className: string;
    textColor: string;
    inactiveTextColor: string;
    children?: React.ReactNode;
}

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedLine = Animated.createAnimatedComponent(View);

const TaskLabel = memo((props : Props) => {
    const {strike, className, children, textColor, inactiveTextColor} = props

  // Shared value for the text color progress
  const textColorProgress = useSharedValue(0);
  const strikethroughProgress = useSharedValue(0);

  // Animated style for text color
  const textColorAnimatedStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [textColor, inactiveTextColor]
      ),
    };
  });

  // Animated style for the strikethrough line
  const strikethroughAnimatedStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(strike ? '100%' : '0%', { duration: 400 }),
      opacity: withTiming(strike ? 1 : 0, { duration: 400 }),
    };
  });

  useEffect(() => {
    // Animate the text color progress based on the 'strike' prop
    textColorProgress.value = withTiming(strike ? 1 : 0, { duration: 400 });
    strikethroughProgress.value = withTiming(strike ? 1 : 0, { duration: 400 });
  }, [strike]);

    return (
        <View>
            <AnimatedView className="items-center">
                <AnimatedText className={className} style={[textColorAnimatedStyles]}>{children}</AnimatedText>
                <AnimatedLine style={[strikethroughAnimatedStyles,{
                height: 2,
                backgroundColor: textColor, // Use the active text color for the strikethrough
                position: 'absolute',
                left: 0,
                top: '50%', // Center the line vertically with the text
                transform: [{ translateY: -1 }], // Offset to center the line height
                }]}/>
            </AnimatedView>
        </View>
    )
})

export default TaskLabel;