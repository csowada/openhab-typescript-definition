declare class PersistenceExtensions extends java.lang.Object {

    constructor()

    // /**
    //  * Persists the state of a given <code>item</code> through a {@link PersistenceService} identified
    //  * by the <code>serviceId</code>.
    //  *
    //  * @param item the item to store
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  */
    persist(item:Item, serviceId:string):void

    // /**
    //  * Persists the state of a given <code>item</code> through the default persistence service.
    //  *
    //  * @param item the item to store
    //  */
    persist(item:Item):void

    // /**
    //  * Retrieves the historic item for a given <code>item</code> at a certain point in time through the default
    //  * persistence service.
    //  *
    //  * @param item the item for which to retrieve the historic item
    //  * @param timestamp the point in time for which the historic item should be retrieved
    //  * @return the historic item at the given point in time, or <code>null</code> if no historic item could be found,
    //  *         the default persistence service is not available or does not refer to a
    //  *         {@link QueryablePersistenceService}
    //  */
    historicState(item:Item, timestamp:AbstractInstant):HistoricItem
    //public static HistoricItem historicState(Item item:Item, AbstractInstant timestamp)

    // /**
    //  * Retrieves the historic item for a given <code>item</code> at a certain point in time through a
    //  * {@link PersistenceService} identified by the <code>serviceId</code>.
    //  *
    //  * @param item the item for which to retrieve the historic item
    //  * @param timestamp the point in time for which the historic item should be retrieved
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return the historic item at the given point in time, or <code>null</code> if no historic item could be found or
    //  *         if the provided <code>serviceId</code> does not refer to an available
    //  *         {@link QueryablePersistenceService}
    //  */
    historicState(item:Item, timestamp:AbstractInstant, serviceId:string):HistoricItem

    // /**
    //  * Checks if the state of a given <code>item</code> has changed since a certain point in time.
    //  * The default persistence service is used.
    //  *
    //  * @param item the item to check for state changes
    //  * @param timestamp the point in time to start the check
    //  * @return <code>true</code> if item state had changed, <code>false</code> if it hasn't or if the default
    //  *         persistence service does not refer to a {@link QueryablePersistenceService}, or <code>null</code> if the
    //  *         default persistence service is not available
    //  */
    changedSince(item:Item, timestamp:AbstractInstant):boolean


    // /**
    //  * Checks if the state of a given <code>item</code> has changed since a certain point in time.
    //  * The {@link PersistenceService} identified by the <code>serviceId</code> is used.
    //  *
    //  * @param item the item to check for state changes
    //  * @param timestamp the point in time to start the check
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return <code>true</code> if item state has changed, or <code>false</code> if it hasn't or if the given
    //  *         <code>serviceId</code> does not refer to an available {@link QueryablePersistenceService}
    //  */
    changedSince(item:Item, timestamp:AbstractInstant, serviceId:string):boolean


    // /**
    //  * Checks if the state of a given <code>item</code> has been updated since a certain point in time.
    //  * The default persistence service is used.
    //  *
    //  * @param item the item to check for state updates
    //  * @param timestamp the point in time to start the check
    //  * @return <code>true</code> if item state was updated, <code>false</code> if either item has not been updated since
    //  *         <code>timestamp</code> or if the default persistence does not refer to a
    //  *         {@link QueryablePersistenceService}, or <code>null</code> if the default persistence service is not
    //  *         available
    //  */
    updatedSince(item:Item,  timestamp:AbstractInstant):boolean


    // /**
    //  * Checks if the state of a given <code>item</code> has changed since a certain point in time.
    //  * The {@link PersistenceService} identified by the <code>serviceId</code> is used.
    //  *
    //  * @param item the item to check for state changes
    //  * @param timestamp the point in time to start the check
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return <code>true</code> if item state was updated or <code>false</code> if either the item has not been updated
    //  *         since <code>timestamp</code> or if the given <code>serviceId</code> does not refer to a
    //  *         {@link QueryablePersistenceService}
    //  */
    updatedSince(item:Item, timestamp:AbstractInstant, serviceId:string):boolean


    // /**
    //  * Gets the historic item with the maximum value of the state of a given <code>item</code> since
    //  * a certain point in time. The default persistence service is used.
    //  *
    //  * @param item the item to get the maximum state value for
    //  * @param timestamp the point in time to start the check
    //  * @return a historic item with the maximum state value since the given point in time, or <code>null</code> if the
    //  *         default persistence service is not available, or a {@link HistoricItem} constructed from the
    //  *         <code>item</code> if the default persistence service does not refer to a
    //  *         {@link QueryablePersistenceService}
    //  */
    maximumSince(item:Item,  timestamp:AbstractInstant):HistoricItem


    // /**
    //  * Gets the historic item with the maximum value of the state of a given <code>item</code> since
    //  * a certain point in time. The {@link PersistenceService} identified by the <code>serviceId</code> is used.
    //  *
    //  * @param item the item to get the maximum state value for
    //  * @param timestamp the point in time to start the check
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return a {@link HistoricItem} with the maximum state value since the given point in time, or a
    //  *         {@link HistoricItem} constructed from the <code>item</code>'s state if <code>item</code>'s state is the
    //  *         maximum value or if the given <code>serviceId</code> does not refer to an available
    //  *         {@link QueryablePersistenceService}
    //  */
    maximumSince(item:Item, timestamp:AbstractInstant, serviceId:string):HistoricItem


    // /**
    //  * Gets the historic item with the minimum value of the state of a given <code>item</code> since
    //  * a certain point in time. The default persistence service is used.
    //  *
    //  * @param item the item to get the minimum state value for
    //  * @param timestamp the point in time from which to search for the minimum state value
    //  * @return the historic item with the minimum state value since the given point in time, <code>null</code> if the
    //  *         default persistence service is not available, or a {@link HistoricItem} constructed from the
    //  *         <code>item</code>'s state if <code>item</code>'s state is the minimum value or if the default persistence
    //  *         service does not refer to an available {@link QueryablePersistenceService}
    //  */
     minimumSince(item:Item, timestamp:AbstractInstant):HistoricItem


    // /**
    //  * Gets the historic item with the minimum value of the state of a given <code>item</code> since
    //  * a certain point in time. The {@link PersistenceService} identified by the <code>serviceId</code> is used.
    //  *
    //  * @param item the item to get the minimum state value for
    //  * @param timestamp the point in time from which to search for the minimum state value
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return the historic item with the minimum state value since the given point in time, or a {@link HistoricItem}
    //  *         constructed from the <code>item</code>'s state if <code>item</code>'s state is the minimum value or if
    //  *         the given <code>serviceId</code> does not refer to an available {@link QueryablePersistenceService}
    //  */
    minimumSince(item:Item,  timestamp:AbstractInstant, serviceId:string):HistoricItem


    // /**
    //  * Gets the average value of the state of a given <code>item</code> since a certain point in time.
    //  * The default persistence service is used.
    //  *
    //  * @param item the item to get the average state value for
    //  * @param timestamp the point in time from which to search for the average state value
    //  * @return the average state values since <code>timestamp</code>, <code>null</code> if the default persistence
    //  *         service is not available, or the state of the given <code>item</code> if no previous states could be
    //  *         found or if the default persistence service does not refer to an available
    //  *         {@link QueryablePersistenceService}
    //  */
    averageSince(item:Item, timestamp:AbstractInstant):DecimalType


    // /**
    //  * Gets the average value of the state of a given <code>item</code> since a certain point in time.
    //  * The {@link PersistenceService} identified by the <code>serviceId</code> is used.
    //  *
    //  * @param item the item to get the average state value for
    //  * @param timestamp the point in time from which to search for the average state value
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return the average state values since <code>timestamp</code>, or the state of the given <code>item</code> if no
    //  *         previous states could be found or if the persistence service given by <code>serviceId</code> does not
    //  *         refer to an available {@link QueryablePersistenceService}
    //  */
    averageSince(item:Item, timestamp:AbstractInstant, serviceId:string):DecimalType


    // /**
    //  * Gets the sum of the state of a given <code>item</code> since a certain point in time.
    //  * The default persistence service is used.
    //  *
    //  * @param item the item for which we will sum its persisted state values since <code>timestamp</code>
    //  * @param timestamp the point in time from which to start the summation
    //  * @return the sum of the state values since <code>timestamp</code>, <code>null</code> if the default persistence
    //  *         service is not available, or {@link DecimalType.ZERO} if no historic states could be found or if the
    //  *         default persistence service does not refer to a {@link QueryablePersistenceService}
    //  */
    sumSince(item:Item, timestamp:AbstractInstant):DecimalType


    // /**
    //  * Gets the sum of the state of a given <code>item</code> since a certain point in time.
    //  * The {@link PersistenceService} identified by the <code>serviceId</code> is used.
    //  *
    //  * @param item the item for which we will sum its persisted state values since <code>timestamp</code>
    //  * @param timestamp the point in time from which to start the summation
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return the sum of the state values since the given point in time, or {@link DecimalType.ZERO} if no historic
    //  *         states could be found for the <code>item</code> or if <code>serviceId</code> does no refer to a
    //  *         {@link QueryablePersistenceService}
    //  */
    sumSince(item:Item, timestamp:AbstractInstant, serviceId:string):DecimalType

    // /**
    //  * Query the last update time of a given <code>item</code>. The default persistence service is used.
    //  *
    //  * @param item the item for which the last update time is to be returned
    //  * @return point in time of the last update to <code>item</code>, or <code>null</code> if there are no previously
    //  *         persisted updates or the default persistence service is not available or a
    //  *         {@link QueryablePersistenceService}
    //  */
    lastUpdate(item:Item):AbstractInstant


    // /**
    //  * Query for the last update time of a given <code>item</code>.
    //  *
    //  * @param item the item for which the last update time is to be returned
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return last time <code>item</code> was updated, or <code>null</code> if there are no previously
    //  *         persisted updates or if persistence service given by <code>serviceId</code> does not refer to an
    //  *         available {@link QueryablePersistenceService}
    //  */
    lastUpdate(item:Item,  serviceId:string):AbstractInstant


    // /**
    //  * Gets the difference value of the state of a given <code>item</code> since a certain point in time.
    //  * The default persistence service is used.
    //  *
    //  * @param item the item to get the average state value for
    //  * @param timestamp the point in time from which to compute the delta
    //  * @return the difference between now and then, or <code>null</code> if there is no default persistence
    //  *         service available, the default persistence service is not a {@link QueryablePersistenceService}, or if
    //  *         there is no persisted state for the given <code>item</code> at the given <code>timestamp</code> available
    //  *         in the default persistence service
    //  */
    deltaSince(item:Item, timestamp:AbstractInstant):DecimalType


    // /**
    //  * Gets the difference value of the state of a given <code>item</code> since a certain point in time.
    //  * The {@link PersistenceService} identified by the <code>serviceId</code> is used.
    //  *
    //  * @param item the item to get the average state value for
    //  * @param timestamp the point in time from which to compute the delta
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return the difference between now and then, or <code>null</code> if the given serviceId does not refer to an
    //  *         available {@link QueryablePersistenceService}, or if there is no persisted state for the given
    //  *         <code>item</code> at the given <code>timestamp</code> using the persistence service named
    //  *         <code>serviceId</code>
    //  */
    deltaSince(item:Item, timestamp:AbstractInstant, serviceId:string):DecimalType


    // /**
    //  * Gets the evolution rate of the state of a given <code>item</code> since a certain point in time.
    //  * The {@link PersistenceService} identified by the <code>serviceId</code> is used.
    //  *
    //  * @param item the item to get the evolution rate value for
    //  * @param timestamp the point in time from which to compute the evolution rate
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return the evolution rate in percent (positive and negative) between now and then, or <code>null</code> if
    //  *         there is no default persistence service available, the default persistence service is not a
    //  *         {@link QueryablePersistenceService}, or if there is no persisted state for the given <code>item</code> at
    //  *         the given <code>timestamp</code>, or if there is a state but it is zero (which would cause a
    //  *         divide-by-zero error)
    //  */
    evolutionRate(item:Item, timestamp:AbstractInstant):DecimalType


    // /**
    //  * Gets the evolution rate of the state of a given <code>item</code> since a certain point in time.
    //  * The {@link PersistenceService} identified by the <code>serviceId</code> is used.
    //  *
    //  * @param item the item to get the evolution rate value for
    //  * @param timestamp the point in time from which to compute the evolution rate
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return the evolution rate in percent (positive and negative) between now and then, or <code>null</code> if
    //  *         the persistence service given by serviceId is not available or is not a
    //  *         {@link QueryablePersistenceService}, or if there is no persisted state for the given
    //  *         <code>item</code> at the given <code>timestamp</code> using the persistence service given by
    //  *         <code>serviceId</code>, or if there is a state but it is zero (which would cause a divide-by-zero
    //  *         error)
    //  */
    evolutionRate(item:Item, timestamp:AbstractInstant, serviceId:string):DecimalType


    // /**
    //  * Returns the previous state of a given <code>item</code>.
    //  *
    //  * @param item the item to get the previous state value for
    //  * @return the previous state or <code>null</code> if no previous state could be found, or if the default
    //  *         persistence service is not configured or does not refer to a {@link QueryablePersistenceService}
    //  */
    previousState( item:Item):HistoricItem


    // /**
    //  * Returns the previous state of a given <code>item</code>.
    //  *
    //  * @param item the item to get the previous state value for
    //  * @param skipEqual if true, skips equal state values and searches the first state not equal the current state
    //  * @return the previous state or <code>null</code> if no previous state could be found, or if the default
    //  *         persistence service is not configured or does not refer to a {@link QueryablePersistenceService}
    //  */
    previousState(item:Item, skipEqual:boolean):HistoricItem
 

    // /**
    //  * Returns the previous state of a given <code>item</code>.
    //  * The {@link PersistenceService} identified by the <code>serviceId</code> is used.
    //  *
    //  * @param item the item to get the previous state value for
    //  * @param skipEqual if <code>true</code>, skips equal state values and searches the first state not equal the
    //  *            current state
    //  * @param serviceId the name of the {@link PersistenceService} to use
    //  * @return the previous state or <code>null</code> if no previous state could be found, or if the given
    //  *         <code>serviceId</code> is not available or does not refer to a {@link QueryablePersistenceService}
    //  */
    previousState(item:Item, skipEqual:boolean, serviceId:string):HistoricItem


}