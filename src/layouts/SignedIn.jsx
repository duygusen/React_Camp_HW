import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, MenuItem } from 'semantic-ui-react'

export default function SignedIn() {
  return (
    <div>
      <MenuItem>
        <Image avatar spaced="right" src=""></Image>
        <Dropdown pointing="top left" text="Duygu">
            <DropdownMenu>
            <DropdownItem text="Bilgilerim" icon="info"/>
              <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
            </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </div>
  )
}
