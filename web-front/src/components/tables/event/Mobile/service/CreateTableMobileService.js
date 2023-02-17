import {Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";


export default function CreateTableMobileService(props){


    const { onBackClick, CheckCompany, handleChange, contractSortation, contractSortationList,
        communication, communicationOpenList, open, handleClick }=props


    return(
        <>
            <Button
                onClick={onBackClick}
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 4 ,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:200,
                    height:30}}
                size="large"
            >
                뒤로가기
            </Button>



            <TextField
                required
                sx={{width:280,paddingBottom:2}}
                type="text"
                size='small'
                name="contractName"
                label="계약자명"
                value={CheckCompany}
                onChange={handleChange}
                disabled
            />


            <TextField
                autoFocus
                required
                sx={{width:280,paddingBottom:2}}
                type="text"
                size='small'
                name="contract"
                label="계약번호"
                onChange={handleChange}
            />
            <TextField
                required
                sx={{width:280,paddingBottom:2}}
                type="text"
                size='small'
                name="terminalNum"
                label="단말기번호"
                onChange={handleChange}
            />



            <TextField
                sx={{width:280,paddingBottom:2}}
                required
                type="text"
                size='small'
                name="id"
                label="ID"
                onChange={handleChange}
            />
            <TextField
                required
                sx={{width:280,paddingBottom:2}}
                type="text"
                name="phoneNum"
                size='small'
                label="연락처"
                onChange={handleChange}
            />




            <FormControl sx={{width:280,paddingBottom:2}}>
                <InputLabel>계약자 구분</InputLabel>
                <Select
                    value={contractSortation}
                    rowsPerPageOptions
                    name="contractSortation"
                    type='text'
                    size='small'
                    onChange={handleChange}
                    input={<OutlinedInput label="name" />}
                >
                    {contractSortationList.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>


            <FormControl sx={{width:280,paddingBottom:2}} >
                <InputLabel>통신</InputLabel>
                <Select
                    value={communication}
                    rowsPerPageOptions
                    name="communication"
                    type='text'
                    size='small'
                    onChange={handleChange}
                    input={<OutlinedInput label="name" />}
                >
                    {communicationOpenList.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                required
                sx={{width:280,paddingBottom:2}}
                type="text"
                size='small'
                name="serviceType"
                label="서비스종류"
                onChange={handleChange}
            />


            <FormControl sx={{width:280,paddingBottom:2}} >
                <InputLabel>개시</InputLabel>
                <Select
                    value={open}
                    name="open"
                    size='small'
                    type='text'
                    onChange={handleChange}
                    input={<OutlinedInput label="name" />}
                >
                    {communicationOpenList.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>





            <TextField
                required
                sx={{width:280,paddingBottom:2}}
                type="text"
                size='small'
                name="serviceRegitDate"
                label="서비스등록일자"
                onChange={handleChange}
            />


            <TextField
                required
                sx={{width:280,paddingBottom:2}}
                fullWidth
                type="text"
                size='small'
                name="serviceCloseDate"
                label="서비스해지일자"
                onChange={handleChange}
            />



            <Button
                onClick={handleClick}
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 1 ,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width:280}}
                size="large"
            >
                신규 생성하기
            </Button>

            <br/>
        </>
    )
}