const Screen = ({ state }) => {
    return (
        <>
            {/* return Pokemon image */}
            <img className='max-w-[200px] mx-auto' src="https://fontmeme.com/permalink/230814/fd7ac5bfc1742f59c48581bec02d2dc9.png" alt="poke-quiz" border="0"/>
            <div className='screen'>
                <img className='m-auto w-[200px] md:w-[250px]' src={state.pokemon[0]} alt="Imágen de pokémon misterioso" />
            </div>
        </>
    );
}
export default Screen;