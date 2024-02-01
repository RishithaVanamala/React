const Teams = ({selectedTeam, handleTeamSelection}) => {
    return (
        <select className='form-select form-select-lg' value = {selectedTeam} onChange={handleTeamSelection}>
            <option value = "TeamA">TeamA</option>
            <option value = "TeamB">TeamB</option>
            <option value = "TeamC">TeamC</option>
            <option value = "TeamD">TeamD</option>
        </select>
    )
}

export default Teams;