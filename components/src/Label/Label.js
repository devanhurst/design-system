import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, space, fontSize, fontWeight, lineHeight, textAlign, fontFamily } from 'styled-system'
import theme from '../theme.js'
import Text from '../Type/Text.js'
import Box from '../Box/Box.js'

const Label = (props) =>{
    return(
        <Box {...props}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> adds help text and format text to label component
            <Text display='inline' mb={0} fontSize={theme.fontSizes[1]}>{props.children}</Text>
            <Text display='inline' mb={0} ml={2} fontSize='12px' color='darkGrey'>{props.requirementText}</Text>
            <Text mb={0} fontSize={theme.fontSizes[0]} lineHeight={theme.lineHeights.smallTextBase}>{props.helpText}</Text>
            <Text mb={0} fontSize='12px' lineHeight='16px' color='darkGrey'>{props.formatText}</Text>
<<<<<<< HEAD
=======
            <Text display='inline' mb={0} fontSize={theme.fontSizes[1]} color='black'>{props.children}</Text>
            <Text display='inline' mb={0} ml={2} fontSize={theme.fontSizes[0]} color='darkGrey'>{props.subtext}</Text>
>>>>>>> adds Label component and changes proptype for display on Text component
=======
>>>>>>> adds help text and format text to label component
        </Box>
    )
}

Label.propTypes = {
<<<<<<< HEAD
<<<<<<< HEAD
    requirementText: PropTypes.oneOf(['(Optional)','(Required)']),
    helpText: PropTypes.string,
    formatText: PropTypes.string   
=======
    subtext: PropTypes.oneOf(['(Optional)','(Required)'])
>>>>>>> adds Label component and changes proptype for display on Text component
=======
    requirementText: PropTypes.oneOf(['(Optional)','(Required)']),
    helpText: PropTypes.string,
    formatText: PropTypes.string   
>>>>>>> adds help text and format text to label component
}

export default Label
