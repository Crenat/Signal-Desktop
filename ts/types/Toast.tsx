// Copyright 2022 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

export enum ToastType {
  AddingUserToGroup = 'AddingUserToGroup',
  AlreadyGroupMember = 'AlreadyGroupMember',
  AlreadyRequestedToJoin = 'AlreadyRequestedToJoin',
  Blocked = 'Blocked',
  BlockedGroup = 'BlockedGroup',
  CannotMixMultiAndNonMultiAttachments = 'CannotMixMultiAndNonMultiAttachments',
  CannotOpenGiftBadgeIncoming = 'CannotOpenGiftBadgeIncoming',
  CannotOpenGiftBadgeOutgoing = 'CannotOpenGiftBadgeOutgoing',
  CannotStartGroupCall = 'CannotStartGroupCall',
  ConversationArchived = 'ConversationArchived',
  ConversationMarkedUnread = 'ConversationMarkedUnread',
  ConversationUnarchived = 'ConversationUnarchived',
  CopiedUsername = 'CopiedUsername',
  CopiedUsernameLink = 'CopiedUsernameLink',
  DangerousFileType = 'DangerousFileType',
  DeleteForEveryoneFailed = 'DeleteForEveryoneFailed',
  Error = 'Error',
  Expired = 'Expired',
  FailedToDeleteUsername = 'FailedToDeleteUsername',
  FileSaved = 'FileSaved',
  FileSize = 'FileSize',
  InvalidConversation = 'InvalidConversation',
  LeftGroup = 'LeftGroup',
  MaxAttachments = 'MaxAttachments',
  MessageBodyTooLong = 'MessageBodyTooLong',
  OriginalMessageNotFound = 'OriginalMessageNotFound',
  PinnedConversationsFull = 'PinnedConversationsFull',
  ReactionFailed = 'ReactionFailed',
  ReportedSpamAndBlocked = 'ReportedSpamAndBlocked',
  StoryMuted = 'StoryMuted',
  StoryReact = 'StoryReact',
  StoryReply = 'StoryReply',
  StoryVideoError = 'StoryVideoError',
  StoryVideoTooLong = 'StoryVideoTooLong',
  StoryVideoUnsupported = 'StoryVideoUnsupported',
  TapToViewExpiredIncoming = 'TapToViewExpiredIncoming',
  TapToViewExpiredOutgoing = 'TapToViewExpiredOutgoing',
  UnableToLoadAttachment = 'UnableToLoadAttachment',
  UnsupportedMultiAttachment = 'UnsupportedMultiAttachment',
  UserAddedToGroup = 'UserAddedToGroup',
}
