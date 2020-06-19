import RetroHitCounter from 'react-retro-hit-counter';
export default class Counter extends Component {
    render() {
        const Counter = () => (
            <RetroHitCounter
              hits={1337}
              /* The following are all default values: */
              withBorder={true}
              withGlow={false}
              minLength={4}
              size={40}
              padding={4}
              digitSpacing={3}
              segmentThickness={4}
              segmentSpacing={0.5}
              segmentActiveColor="#76FF03"
              segmentInactiveColor="#315324"
              backgroundColor="#222222"
              borderThickness={7}
              glowStrength={0.5}
            />
          );
}
}