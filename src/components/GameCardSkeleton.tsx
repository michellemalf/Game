import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card >
      <Skeleton width='200px'>
        <CardBody>
            <SkeletonText/>
        </CardBody>
      </Skeleton>
    </Card>
  )
}

export default GameCardSkeleton
