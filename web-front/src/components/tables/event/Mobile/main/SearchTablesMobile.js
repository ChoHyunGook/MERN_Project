import {findOneMobile} from "../../../../../api";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React,{useState} from "react";


const SearchTablesMobile = (props)=>{

    const {setData, CheckCompany} = props

    const selectList = ['계약번호','단말기번호','계약자명','ID','연락처','서비스종류']

    const [search, setSearch] = useState("")
    const [changeSelect, setChangeSelect]=useState('')
    const [selectSearch, setSelectSearch] = useState("")

    const onSearch = (e) =>{
        const currentTextSearch = e.target.value;
        setSearch(currentTextSearch)
    }

    const onChangeSelectSearch = (e)=>{
        const currentSelect = e.target.value;
        setSelectSearch(currentSelect)
        if(currentSelect === '계약번호'){
            setChangeSelect('contract')
        }else if(currentSelect === '단말기번호'){
            setChangeSelect('terminalNum')
        }else if(currentSelect === '계약자명'){
            setChangeSelect('contractName')
        }else if(currentSelect === '연락처'){
            setChangeSelect('phoneNum')
        }else if(currentSelect === '서비스종류'){
            setChangeSelect('serviceType')
        }else if(currentSelect === 'ID'){
            setChangeSelect('id')
        }
    }

    const onClickSearch = (e) =>{
        e.preventDefault()
        let data ={
            selectBox:changeSelect,
            searchText:search,
            company:CheckCompany
        }
        findOneMobile(data)
            .then(res=>{
                setData(res.data)
                window.location.replace('/mobileTable')
            })
            .catch(function (err){
                alert(JSON.stringify(err.response.data))
            })
    }
    return(

        <form style={{display: 'flex', padding: '3px',alignItems:'center',flexDirection:'column'}}>

            <FormControl sx={{minWidth: 100,paddingRight:3}} variant="standard">
                <InputLabel id="demo-simple-select-label" size='small'>선택</InputLabel>
                <Select
                    value={selectSearch}
                    onChange={onChangeSelectSearch}
                    labelId="demo-simple-select-label"
                    autoWidth
                >
                    <MenuItem value="">
                        <em>선택</em>
                    </MenuItem>
                    {selectList.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div style={{display:'flex',alignItems:'center',paddingBottom:10}}>
            <TextField
                sx={{}}
                label="검색어"
                fullWidth
                size='small'
                variant="standard"
                onChange={onSearch}
            />

            <IconButton
                type="submit"
                sx={{borderRadius: '0.2rem'}}
                onClick={onClickSearch}
            >
                <SearchIcon sx={{height: '30px', width: '30px'}}/>
            </IconButton>
            </div>

        </form>
    )
}

export default SearchTablesMobile