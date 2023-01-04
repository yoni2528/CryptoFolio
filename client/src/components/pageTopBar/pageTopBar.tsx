import React from 'react'
import Button from '../global/Button'
import styles from './pageTopBar.module.css'

import { tokenSelectionModalActions } from '../../store/reducers/modalReducers'

import { useDispatch } from 'react-redux'
import RefreshTokenPrice from '../refreshTokenPrice/RefreshTokenPrice'

const PageTopBar: React.FC<{ pageTitle: string }> = (props) => {
  const dispatch = useDispatch()
  const handleOpenModalToken = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(tokenSelectionModalActions.openModal())
  }

  return (
    <div className={styles['page-top-bar']}>
      <div className={styles['page-title']}>
        <h2>{props.pageTitle}</h2>
      </div>
      <div className={styles['side-bar']}>
        <RefreshTokenPrice />
        <Button onClick={handleOpenModalToken} btnText="Add Token" type="btn-main"></Button>
      </div>
    </div>
  )
}

export default PageTopBar
