// Copyright 2021-2022 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

// TODO DESKTOP-4761

import React from 'react';
import { Provider } from 'react-redux';

import type { Store } from 'redux';

import { ModalHost } from '../../components/ModalHost';
import type { PropsType } from '../smart/GroupV2JoinDialog';
import { SmartGroupV2JoinDialog } from '../smart/GroupV2JoinDialog';

export const createGroupV2JoinModal = (
  store: Store,
  props: PropsType
): React.ReactElement => {
  const { onClose } = props;

  return (
    <Provider store={store}>
      <ModalHost modalName="createGroupV2JoinModal" onClose={onClose}>
        <SmartGroupV2JoinDialog {...props} />
      </ModalHost>
    </Provider>
  );
};
