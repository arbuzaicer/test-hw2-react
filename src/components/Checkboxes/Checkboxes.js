import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Checkboxes = ({checkedM, checkedW, checkedQue, handleChangeCheckbox}) => {
    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedM}
                        onChange={handleChangeCheckbox}
                        name="checkedM"
                        color="Secondary"
                    />
                }
                label="Чоловіки"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedW}
                        onChange={handleChangeCheckbox}
                        name="checkedW"
                        color="primary"
                    />
                }
                label="Жінки"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkedQue}
                        onChange={handleChangeCheckbox}
                        name="checkedQue"
                        color="primary"
                    />
                }
                label="Невизначено"
            />
        </div>
    );
};

export default Checkboxes;