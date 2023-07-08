import React, {useCallback} from 'react';
import {
  FlatList,
  RefreshControl,
  ActivityIndicator,
  ListRenderItem,
  StyleSheet,
  View,
  ViewStyle,
  FlatListProps,
} from 'react-native';
import {COLORS, fontSize, moderateScale, scale, verticalScale} from 'common';
import {Text} from '../Text';
import {t} from 'locale';
import {useColors} from 'hooks';

interface ListProps<T> extends FlatListProps<T> {
  data: Array<any>;
  renderItem: ListRenderItem<any>;
  refreshing?: boolean;
  onRefresh?: () => void;
  onEndReached?: () => void;
  ListFooterComponent?: any;
  loadMore?: Boolean;
  numColumns?: number;
  style?: ViewStyle;
  ListEmptyComponent?: JSX.Element;
  emptyContainerStyle?: ViewStyle;
  emptyMessage?: string;
  ListFooterComponentWithLoading?: JSX.Element;
  emptyIcon?: JSX.Element;
}

export const List = ({
  data,
  refreshing = false,
  onRefresh,
  loadMore,
  onEndReached,
  ListFooterComponent,
  ListFooterComponentWithLoading,
  renderItem,
  numColumns,
  ListEmptyComponent,
  emptyContainerStyle,
  emptyMessage,
  emptyIcon,
  ...props
}: ListProps<any>) => {
  const colors = useColors();
  const renderFooter = () => {
    if (!loadMore) return <View>{ListFooterComponentWithLoading}</View>;
    return (
      <View>
        {ListFooterComponentWithLoading}
        <ActivityIndicator
          size={moderateScale(25)}
          color={COLORS.main}
          style={{marginBottom: moderateScale(9)}}
        />
      </View>
    );
  };

  const keyExtractor = useCallback(
    (item: any, index: number) => index.toString(),
    [],
  );

  const renderEmptyList = () => {
    return (
      <View style={[styles.emptyContainer, emptyContainerStyle]}>
        {emptyIcon}
        <Text title={emptyMessage || t('noData')} style={styles.emptyText} />
      </View>
    );
  };
  const handleEndReached = () => {
    if (data?.length > 9 && !loadMore && onEndReached) onEndReached?.();
  };
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={data}
      numColumns={numColumns}
      renderItem={renderItem}
      // For Pull To Refresh
      refreshControl={
        onRefresh && (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.main}
            colors={[colors.main, colors.mainLight, colors.grayLight]}
          />
        )
      }
      showsVerticalScrollIndicator={false}
      //For Handle Load More Items
      ListFooterComponent={ListFooterComponent || renderFooter}
      onEndReachedThreshold={0.4}
      onEndReached={handleEndReached}
      ListEmptyComponent={ListEmptyComponent || renderEmptyList}
      // Performance Setting
      // removeClippedSubviews={true} // Unmount components when outside of window
      // initialNumToRender={9} // Reduce initial render amount
      // maxToRenderPerBatch={1} // Reduce number in each render batch
      // updateCellsBatchingPeriod={100} // Increase time between renders
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  emptyLottie: {
    height: scale(200),
    resizeMode: 'contain',
  },
  emptyContainer: {
    marginTop: verticalScale(140),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: verticalScale(30),
    fontSize: fontSize(17),
  },
});
