{\rtf1\ansi\ansicpg1251\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # PRD: Toggle Switch Component\
\
## Purpose\
A toggle switch for enabling/disabling a setting in the interface \'97 \
a basic UI component for forms and settings screens.\
\
## Acceptance Criteria\
- Supports `on` / `off` states\
- Supports a `disabled` state (not interactive)\
- Smooth animation when switching between on/off\
- Keyboard accessible (focus via Tab, toggle via Space/Enter)\
- Matches the Figma design (see link below)\
\
## Edge Cases\
- A fast double-click should not break the animation or desync the state\
- `disabled` takes priority over `loading` \'97 if both are true, the component \
  renders as disabled\
- If focus is lost mid-animation, the state must correctly settle on the final value\
\
## Design\
Figma: https://www.figma.com/design/i5V2qT8bgqAvciIN41J0LZ/Variables---Starter-Kit?node-id=6075-115&t=WjUm4rXDowA0AvGd-4\
\
## State Matrix\
Position: Off, On\
State: Default, Hover, Focus, Disabled}